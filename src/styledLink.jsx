function Link(props) {
    return (
        <a href={props.link} target="_blank" className="w-full text-[#EBEBEB] bg-[#3c4249] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium">{props.text}</a>
    )
}

export default Link