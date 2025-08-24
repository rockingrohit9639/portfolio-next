export default function Home() {
  return (
    <div className="md:max-w-xl">
      <h1 className="md:text-xl font-medium mb-1">hi, i&apos;m rohit.</h1>
      <p className="mb-8 text-muted">welcome to my small island on the web.</p>

      <p className="mb-10 md:mb-20">
        i build software with nextjs, react, and node. and sometimes i explain it to plants. they listen better than
        humans.
      </p>

      <h2 className="mb-2 text-lg md:text-xl text-muted">about</h2>
      <p className="mb-10 md:mb-20">
        i started coding back in 8th grade on a second-hand hcl computer, playing around with html. even during the
        chaos of 12th grade board exams, i kept learning c and c++. during my bca degree and the covid-19 break, i
        discovered python and loved it. then came django for web development, and later javascript, react, node, and
        different databases. today, i work as a full stack developer at acemate.ai. i also enjoy sharing what i know,
        contributing to open source, and connecting with other tech lovers. my journey so far is all about curiosity,
        learning new things, and the joy of turning code into something real.
      </p>

      <h2 className="mb-4 text-lg md:text-xl text-muted">projects</h2>
      <h3 className="text-lg font-medium">test project</h3>
      <p className="mb-1 text-muted text-sm">html, css, javascript</p>
      <ul>
        <li>something</li>
        <li>something</li>
        <li>something</li>
        <li>something</li>
        <li>something</li>
      </ul>

      <h2 className="mb-4 text-lg md:text-xl text-muted">skills</h2>
      <div>
        <p>frontend magic: react, nextjs, tailwind </p>
        <p>backend wizardry: nestjs, node, postgres </p>
        <p>miscellaneous tricks: docker, git, cms spells</p>
      </div>
    </div>
  );
}
