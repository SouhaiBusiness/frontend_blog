import Link from 'next/link';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className='slugpage mb-3'>
      <div className='container flex flex-wrap gap-3'>
        <div className='letstalk_sec contactmobile w-40' data-aos='fade-left'>
          <h2 className='mb-3 mt-2'>Contact Me via Email</h2>
          <form
            className='form-group w-100 flex flex-col gap-2 '
            action='https://formspree.io/f/mvoenarl'
            method='post'
          >
            <input type='text' placeholder='Name' className='' required />
            <input type='email' placeholder='Email' className='' required />
            <input type='text' placeholder='Subject' className='' required />
            <textarea
              placeholder='Message'
              className=''
              name='message'
              required
            />
            <button type='submit' className='aboutlink' value='Send Message'>
              Send Message
            </button>
          </form>
        </div>
        <div
          className='letstalk_sec contactmobile w-50 mt-3'
          data-aos='fade-right'
        >
          <h2>Let's Talk</h2>
          <div className='talk_sec'>
            <h4>You want to share any ideas with me ? Let's talk here !</h4>
            <div className='social_talks flex flex-center gap-1 mt-2'>
              <div className='st_icon'>
                <Link href='' target='_blank' rel='noopener noreferrer'>
                  <FaGithub />
                </Link>
              </div>
              <div className='st_icon'>
                <Link href='' target='_blank' rel='noopener noreferrer'>
                  <FaInstagram />
                </Link>
              </div>
              <div className='st_icon'>
                <Link href='' target='_blank' rel='noopener noreferrer'>
                  <FaXTwitter />
                </Link>
              </div>
              <div className='st_icon'>
                <Link
                  href='https://www.linkedin.com/in/souhail-dahmouni-25b083204/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLinkedin />
                </Link>
              </div>
              <div className='st_icon'>
                <Link href='' target='_blank' rel='noopener noreferrer'>
                  <FaFacebook />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
