export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-6 flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-4 text-center" style={{ fontFamily: 'Abril Fatface, serif' }}>CONTACT US</h2>
      <p className="text-center max-w-2xl mb-12 text-black" style={{ fontFamily: 'Inter, serif' }}>
        Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum metusurabitur nulla nisi.
      </p>
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-5xl mb-12">
          {/* Address */}
          <div className="flex flex-col items-center">
            <svg className="mb-2" width="32" height="32" fill="none" stroke="#E9C664" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.418 0-8-5.373-8-10a8 8 0 1 1 16 0c0 4.627-3.582 10-8 10z"/><circle cx="12" cy="11" r="3"/></svg>
            <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Abril Fatface, serif' }}>ADDRESS</h3>
            <iframe width="300" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=400&amp;height=360&amp;hl=en&amp;q=198a%20Market%20St%20Elmwood%20Park+(JM%20Barber%20Lounge)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=557a048e5771b1d93affe1cca2a5b5159b1104f6'></script>
          </div>
          {/* Email */}
          <div className="flex flex-col items-center">
            <svg className="mb-2" width="32" height="32" fill="none" stroke="#E9C664" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M22 5 12 13 2 5"/></svg>
            <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Abril Fatface, serif' }}>EMAIL</h3>
            <p className="text-center text-black">info@company.com</p>
          </div>
          {/* Phone */}
          <div className="flex flex-col items-center">
            <svg className="mb-2" width="32" height="32" fill="none" stroke="#E9C664" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.13.37 2.22.72 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.04.35 2.13.59 3.26.72A2 2 0 0 1 22 16.92z"/></svg>
            <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Abril Fatface, serif' }}>PHONE</h3>
            <p className="text-center text-black">(551) 210-3100</p>
          </div>
          {/* Working Hours */}
          <div className="flex flex-col items-center">
            <svg className="mb-2" width="32" height="32" fill="none" stroke="#E9C664" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Abril Fatface, serif' }}>WORKING HOURS</h3>
            <p className="text-center text-black">Tues - Sat: 9am - 7pm<br />Sun - Mon: Closed</p>
          </div>
        </div>
        <div className="w-full border-t border-[#E9C664] mb-4"></div>
        <p className="text-center text-black text-base" style={{ fontFamily: 'Inter, serif' }}>
          © Copyright JM Barber Lounge 2025
        </p>
      </div>
    </footer>
  );
}