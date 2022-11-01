import Arg from './argentina.svg'
import Eeuu from './estados-unidos.svg'

const Icon = ({ type }) => {
  return(
    <>
      {type === "arg" && <img src={Arg} alt={"Bandera Argentina"} />}
      {type === "eeuu" && <img src={Eeuu} alt={"Bandera de los estados unidos"} />}
    </>
  )
}

export default Icon