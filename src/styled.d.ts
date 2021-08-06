import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      text: string
      background: string
    }
    spacing: {
      numberOfColumns: number
      appTopMargin: string
      sectionMargin: string
      columnWidth: string
    }
  }
}
