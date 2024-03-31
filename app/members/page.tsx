import React from 'react'

const MembersPage = () => {
  return (
      <div className='flex flex-col p-4'>
        <div>
            <h1>Members Page</h1>
        </div>


          <section className="min-h-[95vh] flex flex-col items-center align-middle justify-center">
              <p>Members of the PGSA</p>
          </section>

          <section
              id="honorary-members"
              className="min-h-[95vh] flex flex-col items-center align-middle justify-center"
          >
              <p>Honorary Members of the PGSA</p>
          </section>
      </div>
  );
}

export default MembersPage
