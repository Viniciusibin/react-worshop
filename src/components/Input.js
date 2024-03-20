export default function Input(props) {
  return (
    <div className="flex flex-col  ">
      <label className=""> {props.label}</label>
      <span className="text-sm ">{props.description}</span>
      <input
        type={props.type}
        className="p-2 
        rounded-md shadow-md"
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}
