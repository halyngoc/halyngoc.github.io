import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      text: string
      background: string
    }
    spacing: {
      numberOfColumns: number
      sectionMargin: string
      columnWidth: string
    }
  }
}
