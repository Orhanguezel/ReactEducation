# Komponenten, Props (Datenübertragung) / Donnerstag 09.01.25

## Lernziele :

1. Was ist `Komponent` in REACT ?

- Konzeptionell sind Komponenten wie JavaScript-Funktionen
  - Sie können Eingaben akzeptieren (`props` - kurz für Eigenschaften)
  - Sie geben JSX zurück, das beschreibt, was angezeigt werden soll
    - Komponenten können entweder ein einzelnes JSX-Element zurückgeben (häufig)
    - ODER ein Array von Elementen (selten)

2. Wann soll `new Komponent` erstellt werden ?

- Eine Komponente sollte idealerweise nur eine Aufgabe ausführen

- Wenn sie wächst, sollte sie in kleinere Unter-Komponenten aufgeteilt werden

- Wenn ein Teil einer Seite mehrmals verwendet wird (Button, ProduktKarte), ist es ein guter Kandidat

- wenn ein Teil für sich genommen komplex genug ist

3. `Fragments` ?

- ermöglichen es, mehrere Elemente zurückzugeben, ohne zusätzliche DOM-Knoten hinzuzufügen. Es reduzieren unnötige Wrapper-Elemente (z. B. `<div>`), was die Performance verbessert.

4. Was ist `Props` ?

- Komponenten müssen miteinander kommunizieren

  - Komponenten übergeben Daten zwischen Komponenten durch diese `props`
  - Props ist eine Mischung aus den beiden Denkmodellen
    - HTML-Attribute, die Elemente konfigurieren oder ihr Verhalten anpassen können
    - Funktionsparameter
  - Du könntest das Folgende als ähnlich betrachten

- JSX: `<Product product={prod} />`

5. `Key` Attribute währen iterationen ?

- React verwendet das key-Attribut, um virtuelle DOM-Elemente effizient zu identifizieren.

- Es hilft React, Unterschiede zwischen den Elementen einer Liste zu erkennen, wenn sich die Liste ändert (z. B. durch Hinzufügen, Entfernen oder Neuordnen von Elementen).

- Ohne eindeutige Schlüssel könnte React Elemente ineffizient aktualisieren, was zu Leistungsproblemen oder unerwartetem Verhalten führen kann.

6. `REACT dev tools` ?

- Mit den React Developer Tools (React DevTools) können Sie React-Komponenten inspizieren, Props und State bearbeiten und Performance-Probleme identifizieren.

- [Link for React devtools](https://react.dev/learn/react-developer-tools)

7. `Conditional Rendering` ?

- Unser erster Fall von Logik in JSX!
- In JSX kannst du ein Element basierend auf einer Bedingung rendern
- Oft wird dies mit Ternären oder `&&` gemacht

### Resources :

- [Lesson Repo](https://github.com/dci-fbw-wd-24-d05/components-props)

- [Components and props](https://legacy.reactjs.org/docs/components-and-props.html)

- [Component in React tutoriol](https://react.dev/learn/your-first-component)

- [Lists and Key in React](https://legacy.reactjs.org/docs/lists-and-keys.html)

- [Conditional rendering](https://react.dev/learn/conditional-rendering)

### Tasks :

- [spa-react-simple](https://classroom.github.com/a/TbevPE8U)

- [spa-react-map-transform-jsx](https://classroom.github.com/a/LCkP45nG)
