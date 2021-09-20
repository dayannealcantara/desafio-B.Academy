import { useRef, useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { File } from 'resources/files/types'
import { v4 as uuidv4 } from 'uuid'
import { updateSourceFile } from 'typescript'
import { clearTimeout } from 'timers'

export function App () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function updateStatus () {
      const file = files.find(file => file.active === true)

      if (!file || file.status ! == 'editing') {
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
    setFiles(file => files.map(file => {
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

    setFiles(file => files.map(file => ({
      ...file,
      active: file.id === id,
    })))
  }

  return (
    <Main>
      <Sidebar />
      <Content />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  height: 100vh;
`
