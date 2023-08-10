const Button = ({ title }: { title: string }) => {
  return (
    <button className="text-[white] bg-gradient-to-tr from-primary-100 to-secondary-100 hover:from-primary-200 hover:to-secondary-100 p-3 rounded-lg shadow-xl shadow-primary-100/30 w-full">
      {title}
    </button>
  );
};

export default Button;
