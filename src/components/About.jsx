import Button from './Button'

const skillsRow1 = ['C', 'C++', 'HTML5', 'CSS', 'WORDPRESS', 'FIGMA', 'ARCGIS']
const skillsRow2 = ['ADOBE PHOTOSHOP', 'ADOBE ILLUSTRATOR', 'ADOBE PREMIERE PRO']

export default function About() {
  return (
    <div className="flex justify-between items-center gap-8 flex-wrap">
      <div className="text-left mx-auto flex-1 min-w-[300px]">
        <h2 className="font-display font-normal text-5xl mb-4">/ about me</h2>
        <p className="text-base leading-[1.75] mb-4">
          I'm an international student from Trinidad and Tobago,
          <br />
          currently entering my senior year at Penn State University,
          <br />
          where I'm pursuing a Bachelor's degree in <strong>Computer Science</strong>.
          <br />
          Outside of coding in VS Code, I enjoy reading, graphic design,
          <br />
          video editing, and working out.
        </p>
        <p className="text-base leading-[1.75] mb-4">
          I love combining creativity with code. Side projects keep me curious
          <br />
          and motivated, helping me build the skills I need for a future in
          <br />
          software development with cutting-edge tools. I believe the impact of
          <br />
          any digital solution hinges on how intuitively and meaningfully it
          <br />
          connects with its users. Without thoughtful delivery, even the most
          <br />
          promising ideas can fall flat. I'm constantly learning, whether it's
          <br />
          from my engineering peers or by exploring the ethics and psychology
          <br />
          behind tech design. With every project, I aim to craft user experiences
          <br />
          that are intuitive, inclusive, and built to evolve.
          <br />
        </p>
        <h3 className="text-xl">/ Skills</h3>
        {skillsRow1.map((skill) => (
          <Button key={skill} variant="green">
            {skill}
          </Button>
        ))}
        <br />
        {skillsRow2.map((skill) => (
          <Button key={skill} variant="green">
            {skill}
          </Button>
        ))}
      </div>
      <div className="flex-shrink-0" />
    </div>
  )
}
