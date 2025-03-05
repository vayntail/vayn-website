const HomeButton = ({ title, url, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className="HomeButton text-center cursor-pointer hover:border hover:border-gray-600"
    >
      <img className="w-full" src={url} />
      <p className="text-black text-small font-medodica">{title}</p>
    </div>
  );
};

export default HomeButton;
