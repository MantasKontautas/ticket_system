export default function Button({ type, label, onClick, href }) {
  return (
    <a href={href ? href : ""} className="w-fit m-auto">
    <button
      type={type}
      className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {label}
    </button>
    </a>
  );
}
