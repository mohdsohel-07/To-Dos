import React from 'react'

export const Footer = () => {
  let footerStyle = {
  width: "100%",
  backgroundColor: "#343a40",
  color: "white",
  padding: "10px 0",
  textAlign: "center"
};


  return ( 
    <footer className='bg-dark text-light py-3 ' style={footerStyle} >
     <p className="text-center"> Copyright &copy; Todos-list.com</p>
     </footer>
  )
}
