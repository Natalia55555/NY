import React from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";
// import InformBlock from '../InformBlock/InformBlock';

class Exporter extends React.Component {
export =(type, name)=>{
html2canvas(document.querySelector(`#capture`), {canvas: null, backgroundColor: null}).then(canvas => {
  let dataURL = canvas.toDataURL('image/png');
 

  if (type === 'pdf') {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a6",
    });

    pdf.addImage(dataURL, 'PNG', 0.3, 0.3);
    pdf.save(`${name}.pdf`);

  }
});
}
render() { 
return (
  <div className="output_btn">
    <button className="btn" onClick={()=>this.export("pdf", "HappyNewYear")}>СКАЧАТЬ</button>
    
  </div>
)
}
}

export default Exporter