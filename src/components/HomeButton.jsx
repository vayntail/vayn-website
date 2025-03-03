const HomeButton = ({ title, url, onToggle }) => {
  return (
    <div onClick={onToggle} className="HomeButton text-center cursor-pointer">
      <img className="w-full" src={url} />
      <p className="text-black">{title}</p>
    </div>
  );
};

export default HomeButton;
