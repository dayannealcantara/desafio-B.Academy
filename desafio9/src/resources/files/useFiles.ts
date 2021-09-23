
import { useRef, useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import localforage from 'localforage'
import { File } from './types'

export function useFiles () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function updateStatus () {
      const file = files.find(file => file.active === true)

      if (!file || file.status !== 'editing') {
        return
      }

      timer = setTimeout(() => {
        setFiles(files => files.map(file => {
          if (file.active) {
            return {
              ...file,
              status: 'saving',
            }
          }
          return file
        }))

        setTimeout(() => {
          setFiles(files => files.map(file => {
            if (file.active) {
              return {
                ...file,
                status: 'saved',
              }
            }
            return file
          }))
        }, 300)
      }, 300)
    }

    updateStatus()
    return () => clearTimeout(timer)
  }, [files])

  useEffect(() => {
    localforage.setItem('markee', files)
  }, [files])

  useEffect(() => {
    const selectedFile = files.find(file => file.active === true)
    if (selectedFile) {
      window.history.replaceState(null, '', `/file/${selectedFile.id}`)
    }
  }, [files])

  useEffect(() => {
    async function getFromStrorage () {
      const files = await localforage.getItem<File[]>('markee')
      console.log(files)
      if (files) {
        setFiles(files)
        return
      }
      handleCreateNewFile()
    }
    getFromStrorage()
  }, [])

  const handleCreateNewFile = () => {
    inputRef.current?.focus()
    setFiles(files => files
      .map(file => ({
        ...file,
        active: false,
      }))
      .concat({
        id: uuidv4(),
        name: 'sem titulo',
        content: '',
        active: true,
        status: 'saved',
      }))
  }

  const handleUpdateFileName = (id: string) => (e:ChangeEvent<HTMLInputElement>) => {
    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          name: e.target.value,
          status: 'editing',
        }
      }
      return file
    }))
  }

  const handleUpdateFileContent = (id: string) => (e:ChangeEvent<HTMLTextAreaElement>) => {
    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          content: e.target.value,
          status: 'editing',
        }
      }
      return file
    }))
  }

  const handleSelectFile = (id:string) => (e:MouseEvent) => {
    e.preventDefault()
    inputRef.current?.focus()

    setFiles(files => files.map(file => ({
      ...file,
      active: file.id === id,
    })))
  }

  const handleRemoveFile = (id: string) => {
    setFiles(files => files.filter(file => file.id !== id))
  }
  return {
    files,
    handleCreateNewFile,
    handleSelectFile,
    handleRemoveFile,
    handleUpdateFileName,
    handleUpdateFileContent,
    inputRef,
  }
}