function ColorBar(props){
  return (
    <div style={{height: '25px'}}>
      {props.colors.map((color, index) =>
        <div key={index} style={{borderRadius: '30px' ,display:'inline-block', width: '30px', height: '30px',  background: color}}></div>
      )}
    </div>
        
  );
}

export default ColorBar;
