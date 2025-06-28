import '../assets/style.css';
function Header() {
  return (
    <header dir="rtl" className="flex justify-center">
      <h1 className="text-3xl md:text-5xl lg:text-6xl ruwudu-bold">تكيفي</h1>
      <span className="self-center pt-5 pl-1 logostyle">...</span>
      <span className="self-center pt-5 logostyle">لا تحمل همَّ التكييف</span>
    </header>
  );
}

export default Header;
