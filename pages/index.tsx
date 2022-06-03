import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center py-4 ">
      <Head>
        <title>Tiankai Xie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-left sm:w-11/12 md:w-10/12 lg:w-5/12">
        <div className="grid sm:grid-cols-4 lg:grid-cols-5">
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="text-4xl font-light">Tiankai Xie</h1>
            <h2 className="py-2 text-lg font-light text-gray-500">
              Graduate Research Associate
            </h2>
            <div className="leading-sm inline-flex items-center rounded-full border bg-sky-200 px-3 py-1 text-xs uppercase text-sky-700">
              XAI
            </div>
            <div className="leading-sm inline-flex items-center rounded-full border bg-green-200 px-3 py-1 text-xs  uppercase text-green-700">
              HCI
            </div>
            <div className="leading-sm inline-flex items-center rounded-full border bg-violet-200 px-3 py-1 text-xs uppercase text-violet-700">
              Visual Analytics
            </div>
            <p className="py-2 text-justify font-light text-gray-600">
              I am currently a Ph.D. candidate in computer science at{' '}
              <a href="https://www.asu.edu/" className="text-sky-700">
                {' '}
                Arizona State University
              </a>
              . My research is to increase the transparency and interpretability
              of machine learning models by designing and developing interactive
              visual analytics systems that can facilitate users to explore and
              discover potential vulnerabilities of those models in terms of
              adversarial machine learning, graph mining sensitivity, as well as
              algorithmic fairness.
            </p>
            <p className="text-justify font-light text-gray-600">
              At Arizona State University, I work with Dr.{' '}
              <a
                className="text-sky-700"
                href="http://rmaciejewski.faculty.asu.edu/"
              >
                Ross Maciejewski
              </a>{' '}
              as a member of the
              <a href="http://vader.lab.asu.edu/"> VADER lab</a>. My research is
              supported by the U.S. Department of Homeland Security and the{' '}
              <a
                className="text-sky-700"
                href="https://beta.nsf.gov/funding/opportunities/nsf-program-fairness-artificial-intelligence-collaboration-amazon"
              >
                National Science Foundation Program on Fairness in AI in
                collaboration with Amazon
              </a>
              .
            </p>
            <div className="container flex justify-between py-4">
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/google-scholar--v3.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://scholar.google.com/citations?user=iGRSrJUAAAAJ&hl=en&inst=1960582506653781529&oi=ao"
                  >
                    Scholar
                  </a>
                </span>
              </div>
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/github.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://github.com/tiankaixie"
                  >
                    @tiankaixie
                  </a>
                </span>
              </div>
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://twitter.com/tiankaixie"
                  >
                    @tiankaixie
                  </a>
                </span>
              </div>
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/linkedin.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://www.linkedin.com/in/tiankaixie/"
                  >
                    @tiankaixie
                  </a>
                </span>
              </div>
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/pdf.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="/PDF/Tiankai_Xie_CV.pdf"
                  >
                    CV.pdf
                  </a>
                </span>
              </div>
            </div>
            <hr />
          </div>

          {/* Education Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Education</h1>
          </div>

          {/* Ph.D. */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">Aug. 2018 - Present</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base font-bold">
              Ph.D. in Computer Science
            </h3>
            <h4 className="text-base font-light">
              Arizona State University, Tempe, AZ{' '}
            </h4>
            <p className="text-sm font-light">
              <span className="text-gray-400">GPA:</span> 3.69 / 4.0
            </p>
            <p className="text-sm font-light">
              <span className="text-gray-400">Advisor:</span> Ross Maciejewski
            </p>
            <p className="text-sm font-light">
              <span className="text-gray-400">Dissertation:</span> Explaining
              Vulnerabilities in Machine Learning through Visual Analytics
            </p>
            <p className="text-sm font-light">
              <span className="text-gray-400">Committee:</span> Ross
              Maciejewski, Huan Liu, Chris Bryan, and Hanghang Tong
            </p>
          </div>

          {/* M.S. */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">Aug. 2015 - May 2017</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base font-bold">
              M.S. in Computer Science
            </h3>
            <h4 className="text-base font-light">
              Steven Institute of Technology, Hoboken, NJ{' '}
            </h4>
            <p className="text-sm font-light">
              <span className="text-gray-400">GPA:</span> 3.77 / 4.0
            </p>
          </div>

          {/* B.S. */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">Sep. 2011 - July 2015</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base font-bold">
              B.S. in Computer Science
            </h3>
            <h4 className="text-base font-light">
              Beijing Forestry University, Beijing, China{' '}
            </h4>
          </div>

          {/* Experience Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Experience</h1>
          </div>

          {/* GSA */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">Aug. 2018 - Present</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base font-bold">
              Graduate Research Associate
            </h3>
            <h4 className="text-base font-light">
              VADER Lab, Arizona State University, Tempe, AZ{' '}
            </h4>
            <p className="text-sm font-light">
              <span className="text-gray-400">Advisor:</span> Ross Maciejewski
            </p>
            <p className="text-justify text-sm font-light text-gray-500">
              Work as a research assistant for the VADER Lab with the research
              topics in Explainable AI and Visual Analytics. Current
              dissertation topic is 'Explaining the vulnerabilities of machine
              learning models through visual analytics'. Passed dissertation
              prospectus in Fall 2021.
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="https://vader.lab.asu.edu/"
                >
                  VADER Lab
                </a>
              </span>
            </div>
          </div>

          {/* Intern Epsilon */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">May 2021 - Aug. 2021</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base font-bold">
              Data Science Intern
            </h3>
            <h4 className="text-base font-light">
              Epsilon Data Management, LLC., Chicago, IL{' '}
            </h4>
            <p className="text-sm font-light">
              <span className="text-gray-400">Mentor:</span> Chihua Ma
            </p>
            <p className="text-justify text-sm font-light text-gray-500">
              Designed and implemented the algorithm to extract highlights from
              the aggregated audience data across 2500+ companies. Designed,
              implemented and integrated the Intelligent Audience Profile (IAP)
              visualization view driven by the designed highlighting algorithm
              into the DiME visual analytics platform.
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="https://www.epsilon.com/us/products-and-services/epsilon-peoplecloud/digital-media-solutions"
                >
                  Epsilon & DiME
                </a>
              </span>
            </div>
          </div>

          {/* Intern Epsilon */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">July 2017 - May 2018</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base font-bold">Co-founder</h3>
            <h4 className="text-base font-light">
              RobotGyms, Inc., San Mateo, CA{' '}
            </h4>
            <p className="text-justify text-sm font-light text-gray-500">
              Designed, implemented Robotgyms's infrastructure and curriculum.
              and maintained the company's teaching devices, including local
              network and devices' software and hardware installation and
              upgrade. Developed policies and training plans for online resource
              administration and usage. Give lectures for 40+ students and took
              charge of customer consultation, and conducted SEO and SMO for
              branding programs as well as the company.
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="https://robotgyms.com"
                >
                  RobotGyms
                </a>
              </span>
            </div>
          </div>

          {/* Publication Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Publications</h1>
          </div>

          {/* FairrankVis */}
          <div></div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base">
              FairRankVis: A Visual Analytics Framework for Exploring
              Algorithmic Fairness in Graph Mining Models
            </h3>
            <p className="text-sm font-light text-gray-400">
              Tiankai Xie, Yuxin Ma, Jian Kang, Hanghang Tong, and Ross
              Maciejewski
            </p>
            <h4 className="text-base text-sm font-light italic">
              IEEE Transactions on Visualization and Computer Graphics, 2021{' '}
            </h4>
            <div className="container flex py-2">
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/pdf.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="/PDF/FairRankVis.pdf"
                  >
                    PDF
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/youtube-play.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://youtu.be/WVJ3-UXNxPk"
                  >
                    Video
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/small/96/000000/presentation.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://youtu.be/-pk4VaxJt7I"
                  >
                    Talk
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color-glass/48/000000/code.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://github.com/VADERASU/fairrankvis"
                  >
                    Code
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Auditing */}
          <div></div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base">
              Auditing the Sensitivity of Graph-based Ranking with Visual
              Analytics
            </h3>
            <p className="text-sm font-light text-gray-400">
              Tiankai Xie, Yuxin Ma, Jian Kang, Hanghang Tong, and Ross
              Maciejewski
            </p>
            <h4 className="text-base text-sm font-light italic">
              IEEE Transactions on Visualization and Computer Graphics, 2020{' '}
            </h4>
            <div className="container flex py-2">
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/pdf.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="http://vader.lab.asu.edu/docs/publications/pdf/2021/graph-sensitivity.pdf"
                  >
                    PDF
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/youtube-play.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://www.youtube.com/watch?v=_ifuWHgUyCg"
                  >
                    Video
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/small/96/000000/presentation.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://youtu.be/BtxxhKdO6Ms?t=2285"
                  >
                    Talk
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color-glass/48/000000/code.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://github.com/VADERASU/auditing-sensitivity-graph-ranking"
                  >
                    Code
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* AML */}
          <div></div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base">
              Explaining Vulnerabilities to Adversarial Machine Learning through
              Visual Analytics
            </h3>
            <p className="text-sm font-light text-gray-400">
              Yuxin Ma, Tiankai Xie, Jundong Li, and Ross Maciejewski
            </p>
            <h4 className="text-base text-sm font-light italic">
              IEEE Transactions on Visualization and Computer Graphics, 2019{' '}
            </h4>
            <div className="container flex py-2">
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/pdf.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="http://vader.lab.asu.edu/docs/publications/pdf/2019/adva.pdf"
                  >
                    PDF
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/youtube-play.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://www.youtube.com/watch?v=eMyhe7WcOXc"
                  >
                    Video
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/small/96/000000/presentation.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://vimeo.com/369214358"
                  >
                    Talk
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color-glass/48/000000/code.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://github.com/VADERASU/visual-analytics-adversarial-attacks"
                  >
                    Code
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Reference Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Reference</h1>
          </div>

          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Ross Maciejewski,{' '}
              <span className="font-light">Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              The School of Computing and Augmented Intelligence (SCAI)
            </p>
            <p className="font-light italic text-gray-500">
              Arizona State University
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="http://rmaciejewski.faculty.asu.edu/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Huan Liu, <span className="font-light">Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              The School of Computing and Augmented Intelligence (SCAI)
            </p>
            <p className="font-light italic text-gray-500">
              Arizona State University
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="http://www.public.asu.edu/~huanliu/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Hanghang Tong,{' '}
              <span className="font-light">Associate Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              Department of Computer Science
            </p>
            <p className="font-light italic text-gray-500">
              University of Illinois at Urbana-Champaign
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="http://tonghanghang.org/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Chris Bryan,{' '}
              <span className="font-light">Assistant Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              The School of Computing and Augmented Intelligence (SCAI)
            </p>
            <p className="font-light italic text-gray-500">
              Arizona State University
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="https://chrisbryan.github.io/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Yuxin Ma,{' '}
              <span className="font-light">Assistant Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              Department of Computer Science and Engineering
            </p>
            <p className="font-light italic text-gray-500">
              Southern University of Science and Technology
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="https://mayuxin.me/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Jundong Li,{' '}
              <span className="font-light">Assistant Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              Department of Computer Science, and School of Data Science
            </p>
            <p className="font-light italic text-gray-500">
              University of Virginia
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="http://www.ece.virginia.edu/~jl6qk/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>
          {/* End */}
        </div>
      </main>
    </div>
  )
}

export default Home
