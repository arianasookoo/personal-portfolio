import Button from './Button'

export default function ProjectCard({ project }) {
  return (
    <div className="border border-grey rounded-[10px] m-[5px] bg-white text-left text-black font-sans p-[15px] max-w-[300px] hover:border-green">
      <a target="_blank" rel="noreferrer" href={project.href} className="no-underline text-black font-sans">
        <img src={project.image} alt={project.title} className="w-full h-auto rounded-[10px]" />
      </a>
      <div className="pt-[15px] px-[15px] font-extrabold">{project.title}</div>
      <div className="px-[15px] pt-[2px] font-semibold">{project.year}</div>
      <div className="px-[15px] py-[5px] text-grey leading-normal">{project.desc}</div>
      {project.icons.map((iconClass) => (
        <i key={iconClass} className={`${iconClass} text-[2rem] m-4 transition-all duration-300 text-black`} />
      ))}
      {project.tags.map((tag) => (
        <Button key={tag} variant="green">
          {tag}
        </Button>
      ))}
    </div>
  )
}
