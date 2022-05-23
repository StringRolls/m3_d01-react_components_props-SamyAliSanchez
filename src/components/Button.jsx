export default function Button (props) {
    return (
      <a href={props.linkTo}>
        <button> {props.prompt} </button>
      </a>
    )
  }