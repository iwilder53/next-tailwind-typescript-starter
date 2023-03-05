import Layout from '../components/Layout'

const IndexPage = () => (

  <Layout title="Home | Next.js + TypeScript Example">
    <div className=" flex flex-row place-content-evenly ">

      <div className='container flex flex-col box-border hover:box-content hover:translate-y-3 duration-700 bg-slate-100 opacity-80 hover:opacity-90 rounded-3xl w-1/2 min-h-max shadow-lg  p-6 m-6 justify-self-center' >


        <p className="text-slate font-mono object-top ">
          Hi,<br></br>
          I am
          Yash
          <br></br>
          Embedded & Mobile Developer
          <br></br>
          Since 2012
          <br></br>

        </p>


        <div className='container opacity-70 hover:opacity-100 rounded-xl hover:rounded3xl w-1/2 min-h-fit shadow-lg    duration-300  p-6 m-6 justify-self-stretch' >

          <p className=' justify-center'>Full Site coming soon</p>
        </div >
      </div>

    </div>

  </Layout>
)

export default IndexPage
