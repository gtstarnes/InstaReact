import './profButton.css'

type Props = {
    text: string
}

const ProfButton = ({text}:Props) => {
  return (
    <button className="prof-button">{text}</button>
  )
}

export default ProfButton