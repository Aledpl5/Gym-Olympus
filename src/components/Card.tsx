const Card = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="rounded-[50px] bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-6">
        {children}
    </div>
  )
}

export default Card