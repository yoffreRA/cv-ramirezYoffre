import React from 'react';


function ContactForm() {



  return (

    <div>
      <form className='grid min-h-[320px] grid-cols-1 gap-y-4' method='POST' >

        <input className='bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm' name="title" placeholder="Name" required type="text" />

        <input
          autoComplete="name"
          className='bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm'
          name="to_name"
          placeholder="name"
          required
          type="text"
        />

        <input
          autoComplete="email"
          className='bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm'
          name="to_email"
          placeholder="Email"
          required
          type="email"
        />

        <textarea
          className='bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm'
          maxLength={250}
          name="content"
          placeholder="Message"
          required
          rows={6}
        />
        <button
          aria-label="Submit contact form"
          className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
          type="submit">
          Send Message
        </button>
      </form>
    </div>
  )
}
import { handleFrom } from '../../../action';

export default ContactForm





