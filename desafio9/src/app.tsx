import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { useFiles } from 'resources/files/useFiles'

export function App () {
  const {
    files,
    handleCreateNewFile,
    handleSelectFile,
    handleRemoveFile,
    handleUpdateFileName,
    handleUpdateFileContent,
    inputRef,
  } = useFiles()

  return (
    <Main>
      <Sidebar
        files={files}
        onNewFile={handleCreateNewFile}
        onSelectFile={handleSelectFile}
        onRemoveFile={handleRemoveFile}
      />
      <Content
        inputRef={inputRef}
        file={files.find(file => file.active === true)}
        onUpdateFileName={handleUpdateFileName}
        onUpdateFileContent={handleUpdateFileContent}
      />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  height: 100vh;
`
