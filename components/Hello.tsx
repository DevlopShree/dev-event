'use client'

type HelloProps = {
  className?: string;
  name?: string;
};
const Hello = ({className, name}: HelloProps) => {
  console.log('am I cline side rendered')
  return (
    <div className={className}>Hello {name}</div>
  )
}

export default Hello