function Testimonial({ text, author }) {
  return (
    <blockquote className="bg-[#dce6f4] border-r-4 border-blue-600 my-3 p-4 rounded text-gray-600 italic">
      {text} – <span className="font-semibold">{author}</span>
    </blockquote>
  );
}

export default Testimonial;
