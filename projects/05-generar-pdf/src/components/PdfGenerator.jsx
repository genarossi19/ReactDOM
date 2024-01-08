import React from 'react'
import { Page, Text, View, Document, StyleSheet, Image} from '@react-pdf/renderer';
import pctLogo from "../assets/pctlogo.png";


function PdfGenerator({name = "alumno", apellido = "polo", curso ="curso"}) {
   
    const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Se suma 1 porque los meses son indexados desde 0
  const year = currentDate.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  const styles = StyleSheet.create({
    page: { 
        backgroundColor: '#97D3E9', 
        justifyContent: 'center'
    },
    section: { 
        color: 'white', 
        textAlign: 'center', 
        margin: 30 
    },
    title:{
        fontFamily: 'Helvetica',
        color: 'white',
        lineHeight: 1.1,
        textAlign: 'center',
        margin: 10

    },
   
  });
  return (
    <Document >
    <Page size="A4" orientation='landscape' style={styles.page}>
        
        <Image  src={pctLogo}/> 
        
      <View >
        <Text style={[styles.title, {fontSize: 50}]}>Nombre: {name}</Text>
      </View>
      <View>
        <Text style={[styles.title, {fontSize: 30}]}>Apellido: {apellido}</Text>
      </View>
      <View>
        <Text style={[styles.title, {fontSize: 25}]}>Curso: {curso}</Text>
      </View>
      <View>
        <Text style={[styles.title, {fontSize: 15}]}>Fecha: {formattedDate}</Text>
      </View>
    </Page>
  </Document>
  )
}

export default PdfGenerator