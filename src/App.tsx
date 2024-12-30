import './App.css'
import { ToastContainer, toast } from 'react-toastify';

const ibanArray = [
  {
    bank: "🔸 საქართველოს ბანკი",
    iban: "GE42BG0000000580749627",
    person: "ლაშა ბანეთიშვილი"
  },
  {
    bank: "🔹 თიბისი ბანკი",
    iban: "GE95TB7971545064300001",
    person: "ლაშა ბანეთიშვილი"
  },
  {
    bank: "🔺 Paypal",
    iban: "banetishvili.lasha@gmail.com",
    person: "Lasha Banetishvili"
  },
]

function App() {

  const handleCopy = (iban: string) => {
    navigator.clipboard.writeText(iban)
      .then(() => {
        toast.success('ანგარიში დაკოპირებულია', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      })
      .catch((_err) => {
        toast.error('Failed to copy IBAN.', {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };


  return (
    <div className='main_bg'>
      <h2>დავეხმაროთ ბავშვებს და მოხუცებს, <br/>რომლებიც შიმშილობენ</h2>
      <ToastContainer />
      <div className="content">
        {ibanArray.map((item, index) => (
          <div className="iban-card" key={index}>
            <h2>{item.bank}</h2>
            <p onClick={() => handleCopy(item.iban)}><strong>ანგარიში:</strong> {item.iban}</p>
            <p><strong>მიმღები:</strong> {item.person}</p>
          </div>
        ))}
      </div>
      <p>ტელ: 596919191</p>
    </div>
  )
}

export default App
