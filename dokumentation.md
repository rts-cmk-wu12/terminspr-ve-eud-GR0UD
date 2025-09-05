# Dokumentation

## WU-12

### Marks Galkins

## Design Ændringer og Begrundelse

I løbet af projektet blev jeg nødt til at foretage væsentlige ændringer i det oprindelige design, da den initielle designdokumentation var meget begrænset og manglede vigtige detaljer. Her er mine primære overvejelser og ændringer:

1. **Udvidet Informationsarkitektur**

   - Det oprindelige design havde minimale oplysninger om datastruktur og brugerflow
   - Tilføjede mere detaljeret navigation og brugerinteraktion
   - Forbedrede den overordnede brugeroplevelse

2. **Responsivt Design**
   - Implementerede et mere robust responsivt design
   - Sikrede bedre tilgængelighed på tværs af forskellige enheder

## Kodeeksempel

Her er et eksempel på en af de vigtige komponenter i projektet - Login formularen:

```jsx
// loginForm/index.jsx
const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await doTheLoginThing(loginData);
      if (response.ok) {
        // Håndter succesfuld login
      }
    } catch (error) {
      console.error("Login fejlede:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={loginData.username}
        onChange={(e) =>
          setLoginData({ ...loginData, username: e.target.value })
        }
        placeholder='Brugernavn'
      />
      <input
        type='password'
        value={loginData.password}
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
        placeholder='Adgangskode'
      />
      <button type='submit'>Log ind</button>
    </form>
  );
};
```

Dette kodeeksempel viser implementeringen af login-formularen, som er en central del af applikationen. Den håndterer brugervalidering og demonstrerer god praksis for formhåndtering i React med state management og error handling.

## Tekniske Valg

- **Next.js**: Valgt for dens SSR kapabiliteter og routing system
- **SCSS**: Implementeret for bedre styling organisation og genbrugelighed
- **Component-baseret arkitektur**: For bedre vedligeholdelse og skalerbarhed

## Læringspunkter

- Vigtigheden af grundig dokumentation fra starten
- Betydningen af at have en klar designstrategi
- Værdien af komponent-baseret udvikling
