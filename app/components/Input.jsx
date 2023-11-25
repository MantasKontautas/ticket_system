export default function Input({ label, name, type, required }) {
    return (
        <>  
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} required={required} className="py-2 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-400"/>
        </>
    );
}