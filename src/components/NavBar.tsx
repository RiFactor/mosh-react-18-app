interface IProps {
  count: number;
}

const NavBar = ({ count }: IProps) => {
  return <div>navbar {count}</div>;
};

export default NavBar;
