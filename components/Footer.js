
export default function Footer() {
  return (
    <footer style={{ position: "fixed", bottom: 0, width: "100%" }} >

      <div className="bg-blue-500 py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="lex justify-between items-center">
            <a href="#" className="font-bold text-xl text-white">Arthur Moro</a>
          </div>
          <div className="md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
            me siga nas redes:
            <a style={{ paddingRight: "5px", paddingLeft: "5px" }} target="_blank" href="https://github.com/arthurmoro">
              <img src="./icons/github.svg"></img>
            </a>
            <a target="_blank" href="https://linkedin.com/in/arthurmoro">
              <img src="./icons/linkedin.svg"></img>
            </a>
          </div>
        </div>
      </div>

    </ footer >
  )
}