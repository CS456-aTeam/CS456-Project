function ColorBar(props){
  return (
    <div style={{height: '30px'}}>
      {props.colors.map((color, index) =>
        <div key={index} style={{borderRadius: '30px' ,display:'inline-block', width: '25px', height: '25px',  background: color}}></div>
      )}
    </div>
        
  );
}

export default ColorBar;
