import HomeButton from "./HomeButton";

const Nav = ({ onToggle }) => {
  const buttons = [
    { name: "about", title: "about me", icon: "/icons/text_editor.png" },
    { name: "code", title: "code", icon: "/icons/github.png" },
    { name: "art", title: "art", icon: "/icons/paint_alt.png" },
  ];
  return (
    <div className="Nav">
      {buttons.map((button) => (
        <HomeButton
          key={button.name}
          title={button.title}
          url={button.icon}
          onToggle={() => onToggle(button.name)}
        />
      ))}
    </div>
  );
};

export default Nav;
