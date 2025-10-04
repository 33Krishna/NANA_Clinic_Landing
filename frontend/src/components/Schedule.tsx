import { IoCallOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Schedule = () => {
    return (
        <div className="px-6">
            {/* Clinic Details */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-clinic-muted text-clinic-primary rounded-full text-sm font-medium reveal">
                Book an Appointment
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-clinic-accent reveal"
                style={{ transitionDelay: "100ms" }}
              >
                Schedule Your <span className="text-clinic-primary">Visit</span>{" "}
                Today
              </h2>
              <p
                className="text-gray-600 reveal"
                style={{ transitionDelay: "200ms" }}
              >
                Take the first step towards better hearing health by booking an
                appointment with our specialists. Fill out the form, and we'll
                contact you promptly to confirm your visit.
              </p>

              <div
                className="space-y-4 reveal"
                style={{ transitionDelay: "300ms" }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-clinic-muted flex items-center justify-center flex-shrink-0 mt-1">
                    <IoCallOutline className="h-5 w-5 text-clinic-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-clinic-accent">Phone</h3>
                    <p className="text-gray-600">+91 720 545 4269</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-clinic-muted flex items-center justify-center flex-shrink-0 mt-1">
                    <MdOutlineEmail className="h-5 w-5 text-clinic-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-clinic-accent">Email</h3>
                    <p className="text-gray-600">
                      nana.healthcareclinic@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-clinic-muted flex items-center justify-center flex-shrink-0 mt-1">
                    <IoTimeOutline className="h-5 w-5 text-clinic-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-clinic-accent">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 8:00 PM
                    </p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: "400ms" }}>
                <img
                  src="/images/form-picture.jpg"
                  alt="Modern reception area"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
        </div>
    )
}

export default Schedule;