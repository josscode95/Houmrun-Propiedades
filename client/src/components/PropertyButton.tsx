
export interface PropertyButtonProps{
  className?:string;
}

export const PropertyButton = ({className}:PropertyButtonProps) => {
  return (
    <div>
      <button>Agregar a Favoritos</button>
    </div>
  )
}
