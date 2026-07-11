import Button from './Button'

const socials = [
  { href: 'https://www.linkedin.com/in/ariana-sookoo-025a18177/', icon: '' },
  { href: 'https://github.com/arianasookoo', icon: '' },
  { href: 'https://www.youtube.com/@arianamiriam', icon: '' },
]

export default function Hero() {
  return (
    <div className="flex justify-between items-center gap-8 flex-wrap">
      <div className="text-left mx-auto flex-1 min-w-[300px]">
        <h2 className="font-display font-normal text-5xl mb-4">/ hello world!</h2>
        <h1 className="text-8xl mb-4">i&apos;m ariana sookoo</h1>
        <p className="text-2xl mb-4">blending code with creativity.</p>
        <Button variant="border">pennsylvania</Button>
        <Button variant="border">trinidad and tobago</Button>
        <br />
        {socials.map((social) => (
          <a key={social.href} href={social.href}>
            <i className="fa m-4 text-[2rem] transition-all duration-300 text-black hover:text-green hover:scale-[1.2] cursor-pointer inline-block">
              {social.icon}
            </i>
          </a>
        ))}
      </div>
      <div className="flex-shrink-0">
        <img
          src="/images/portfolio_selfimage.png"
          alt="Ariana Miriam Cartoon Portrait"
          className="h-[35rem] w-auto transition-all duration-300 hover:scale-105"
        />
      </div>
    </div>
  )
}
