import './App.css';

const App=()=>{
  return(
    <div className='app-wrapper'>
     <header className='header'>
      <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8AAAD8/PwEBAT5+fnR0dHU1NRwcHD19fXx8fGEhITt7e2xsbEICAjv7+++vr7k5OQtLS0aGhrd3d2QkJBnZ2djY2NsbGyhoaFQUFBzc3NHR0eWlpbGxsZeXl40NDR/f39AQEAiIiITExNCQkKJiYmpqalVVVW2trZMTEweHh6Tk5MwMDCcnJz8SVFnAAAI00lEQVR4nO2dCXuiMBCGkxCQU1G8FUUt1rbb///3NgeobVEr5rJPvu12bdeDl0kmk5AZALCysrKysrKysrKysrKyshIoRP6c/USk7VCECxMYyvONEGCA8F/AROArWy3Mf/8nTIkww+i68XRYhkVYDqdxHrD/wn/AiAzOT+P5ZpDAk5zBujikAXhWI6LKr/DOl+1HO3hOVz/YjfZZhYgaW7LBYo0PU1cC3FUfXlZ/5NEnoafzOeyYiS/B+ewKHnSoOWekTxJIjJjzeRphZpVsQvteklwkZC02GWXA91HlkJ5DiDnQqDza6Zoo/zAibRo/kw0R8IH7dhvPqe24cFnLfgojMs9IXON0cMN2XzWY4iryMZ2yAgxKeKt1flcYIBatmk7Ix8Cgcycebc/zCCDzTUhFABfwbhMSLbrPwEdHtXRCbdICcZI+QXBDjs9/bWVB+ppZ0DwRMUmknZUt6GqVyPhBEYP9A4AQxubb0P1FGHNR5IWuboJbwq+t+uAJcWa6DUuYPEJIovRSN8I1IZzteCjdmpB8ZboxLonFI4sH6Got6ETRyLZKDqonABDCnrGAyB8LIRwFwMz5Pga5EEAIc+CbaERiw/lDI8VJc2RkaINQJAgQwgiY2BURmArig3Bq5BwDkXBGlF6xiYTA3Qoj7HsmtlIQCwOkUwwDCVEokDA0j49M7a8u4N8lB775unEaFMF2ixfNinTjNCitlq9FyIGpbpwG9aA4Gzo0+jZOH48sX/wgHOrGaVAhsBs6sNCN06C5UMKObpwGjaDIfjjWjdOgsVBfutKN0yCxhCbaUGwrnejGaVAhzIaOob50CUXa8FM3ToPErCTWMjGmcUWa0MgLNKkgPC4TI+9gLTCo2QS6cRqEC0F09DSFRq5EiVqnoYRGrtOAfCtsPNzmJhIKXS9FJhICMBTmaoZGrnmLHC/oWGEgIQJiLh9COAJmtlIkLHDrGUoIgKBrwGMfmdkPERY0JMY8kUg3T5N88PYoHXHGb2xDtJGECOD8wUVTJ4Ewx8DQVkpPPA4f3jFUojqNxjTxI4o2jxiRvHITAb6n3TzCivGRHScOm/pWG/ZNJOSZoY/tV5iiese+kYRUGI/qBnef/dj3Sb2TxlxCeoQLmCR372RnS5EL4B+365tLiEA0a7F0Sp//Rr1MnadnLiE5wvSlhUN14CZlGbXGE9KQqzu+d6swefY44smW9Ttp5bgiYgXiK6LRvSaEo4hmvB1zSc1On6EtdbmrTPMLt0qa9G4J0DMlIGKAfW9QH/1VQu50dy7BeyJAHllG4e4moMMAkyICz5JfWQnxgTsfwypP9AIfn0y80o3dT1Z8oIq8ED6sb/VBuO75rOM+FSHi31hydm98LV32fdTDp+TYZ2I8U+B9fqs5cGy0/Wlm4hWY+8SHgHTamfXPZ8ZJfzbfs+SYp2qcTUI8AqClTXrxZ1l0Op2inMY9j1f9MHUeeI8QjzXrYBPjY+mEv8H318SmrVW6S+ROl2Ex71SadC5qPi8+9jm/rI0wT5Y2U6wuEsEL3EP4cnMY/KlNePC6/I0MjW94v8rDVR2Q/k4Ji9z4CDJYhTkGpmbn0QbqFu+nAYFj3jRd9ZTjsse28HxD507RYcWG87MlGqcy5VXC+omnEHZ8MHGrPtrTvkfa3Pkh/1LOl4f0p5fYGCPSoY6GLXEb33JNLzEbRrWn6SHu27O5YD6qicdLvem1JisOGHyQ43koSf2Chj7QPqui59h7hS3WR2+JveOrRwIIve2UfPw+If5FggX5+kasc+DgMVpZnXFZCqvKSjo46dJDNBGYKfNT9J07EQKBDkNyH7pmI6A80YWqRcZqnapHJE4mXdBDkEnIEN8yoGOxmBZ9XHN/INWIlHHtaSmygDIaxiSJ3H7owKS6KqUSjdfijF5lsn3hdOAq4pNjRZxs6QV3oMxB4gshzWVTfN2GnMullDjtEmMCP6uFdDV85CumM1x1iOTTDgqDcFqJZsv8uDJE0l76PlZXixeBFaNT1E6rEWkFFJapPahsoEcdlDlTlK5VuplKDlynyghFVsC4BzFURZgq9aLnihR50wnp+49sIm0n2i8mKkZ9hF26pq3eiNSfDlwFCzf1SKFHcyS71DB5//T2Hhkp4p+ZSh8TaYlZRVOKRpVI7sU38u5dtnivjXHTlWzDY+aPLsakJ3vAEJYL204OLOTOMBDu/tNKCGE/kEuIco1DBZUDc4l8tBuKrCTUCpAEp3IJN9ptuJFKCNL77lohg3Agt5RbrtWAjFByUZBPzYBUcgu76Jn7fpVUV+Pfn2QgXhOZW1EicfUtW4reBEOmq6HXC3Uzwn8ya9dkugcLqoHMwvue5vGey/vzhDJrSLm64ZhkE2o2ouQ6YGbYUGY/tIRqZAktoSXULccSWkJLqF2W0BJaQt2TJ2tDS2gJLaEKWUJLaAntiC9fltASWkL9soSW0BLaEV++LKEltIT6ZQkfJfxWyEsRlFN/IPsrcz9NtoZ1ihXN7lIFWFOy0zuLZe6+RFlenLYnqssMoh/EM4/XcSo1s4uWicHucNavT6oyQGa+91Esu2oUQryosbfvbNXAnam/dBHwJZfH4LfWoOcRB+7wZasuSN2Oel16dxastt5g2isnJ1s6VblL8VV5NsUhqk6wQlV1RrqZW25OjKd/W7qhn4Uk+0We8qajvKopr8RDPxS70/lr//JB3sl4fPg+6+zZbfS0lGzjRddP9/UJvN50vj4dZlvI4+vWYexGGJw+RIPwka/KISd+wNsXq01/196EEO7+vU2WeYD5J7CKLTrL7jX9EGR5PC3G6/tTF97f5ss4z3hFYlyxmVmPlhxXEEVZvh/OZ5v+YHetFEqyG/Q3q/lnz0ujoLoXkqlUZ/pyiH6aub3Dfvr58TEswzAsijAsh8Ph8nMa93Iv9Y+vUVhjR4BQZYvf1LFAlYCZVaAbxMvjfrux0bl5Kg919vvqlhjqR72WQvUXuGUVbreTR3kOvvuFGh9aWVlZWVlZWVlZWVlZWYnSf8B7hRCZV2Y3AAAAAElFTkSuQmCC' alt='icony'/>
     </header>
     <nav className='nav'>
      <div>
        <a >Profile</a>
      </div>
      <div>
        <a >Messages</a>
      </div>
      <div>
        <a >News</a>
      </div>
      <div>
        <a >Music</a>
      </div>
      <div>
        <a >Settings</a>
      </div>

     </nav>
     <div className='content'>
      <div>
        <img alt='main' src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
      </div>
      <div>
        ava+description
      </div>
      <div>
        My posts
        <div>
          new post
        </div>
        <div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
      Main content
     </div>
    </div>
    )
}
export default App;
