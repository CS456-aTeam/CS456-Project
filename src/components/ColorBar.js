function ColorBar(props){
  return (
    <div style={{height: '58px', width: '54px', outline: "0.01em solid black", padding: "2px", borderRadius: "12px"}}>
      {props.colors.map((color, index) =>
        <div key={index} style={{borderRadius: '30px', display:'inline-block', width: '25px', height: '25px',  background: color}}></div>
      )}
    </div>
        
  );
}

export default ColorBar;
