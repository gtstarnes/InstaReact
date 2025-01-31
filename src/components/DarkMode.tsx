
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

const DarkMode = () => {
  return (
    <button onClick={toggleDarkMode}></button>
  )
}

export default DarkMode