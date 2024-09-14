import './footer.scss';

export default function Footer({ classname }: { classname: string }) {
  return (
    <div className={`footer ${classname === 'light-background' ? 'dark-text' : ''}`}>
      <span className="pageFooter">&#169;/{new Date().getFullYear()}</span>
    </div>
  )
}