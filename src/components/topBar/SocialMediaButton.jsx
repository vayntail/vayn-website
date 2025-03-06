const SocialMediaButton = (props) => {
  return (
    <a
      className="px-2 md:px-4 border border-gray-2 hover:bg-gray-4 flex justify-center items-center gap-2"
      href={props.url}
      target="_blank"
    >
      {props.svg && props.svg}
      {props.text}
    </a>
  );
};
