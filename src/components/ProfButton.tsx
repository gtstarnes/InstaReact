import './profButton.css'

type Props = {
    text: string
}

const ProfButton = ({text}:Props) => {
  return (
    <button>{text}</button>
  )
}

export default ProfButton