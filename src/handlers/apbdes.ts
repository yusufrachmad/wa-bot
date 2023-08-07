import { Message } from 'whatsapp-web.js';

const apbdesHandler = (message: Message) => {
  message.reply(
    `URAIAN	|| ANGGARAN ||	REALISASI	|| LEBIH/KURANG

PENDAPATAN			
Pendapatan Asli Desa ||	24.600.000,00 || 24.600.000,00 || 	
Pendapatan Transfer || 1.283.248.000,00 || 1.289.755.920,00 || 6.507.920,00
Pendapatan Lain-lain || 4.647.000,00 || 5.415.194,05 || 768.194,05
JUMLAH PENDAPATAN	|| 1.312.495.000,00 || 1.319.771.114,05 || 7.276.114,0
BELANJA			
	
BIDANG PENYELENGGARAAN PEMERINTAHAN DESA			
Sub Bidang Penyelenggaraan Belanja Penghasilan Tetap, 
Tunjangan dan Operasional Pemerintahan Desa		 || 459.167.300,00 || 451.771.154,00 || 7.396.146,00
Sub Bidang Sarana dan Prasarana Pemerintahan Desa || 	21.473.604,00 || 10.094.000,00 || 11.379.604,00
Sub Bidang Administrasi Kependudukan, 
Pencatatan Sipil, Statistik, dan Kearsipan       || 42.740.300,00 || 38.464.400,00 || 4.275.900,00
Sub Bidang Tata Praja Pemerintahan, 
Perencanaan, Keuangan dan Pelaporan		|| 38.578.420,00 || 36.530.200,00 || 2.048.220,00
Sub Bidang Pertanahan	   || 27.133.186.24 || 26.430.200,00 || 702.986,24
Jumlah Bidang Penyelenggaraan Pemerintahan Desa	   || 589.092.810,24 || 563.289.954,00 || 25.802.856,24
BIDANG PELAKSANAAN PEMBANGUNAN DESA			
Sub Bidang Pendidikan	|| 43.200.000,00 ||	43.100.000,00 || 100.000,00
Sub Bidang Kesehatan	|| 178.817.021,00	|| 173.128.500,00 ||	5.688.521.00
Sub Bidang Pekerjaan Umum dan Penataan Ruang	|| 40.000.000,00 || 39.743.000,00 || 257.000,00
Sub Bidang Kehutanan dan Lingkungan Hidup	|| 24.000.000,00 || 24.000.000.00 || 4.292.235,00
Sub Bidang Perhubungan, Komunikasi, dan Informatika	|| 24.500.000,00 || 20.207.765,00 || -
Jumlah Bidang Pelaksanaan Pembangunan Desa || 310.517.021,00 || 300.179.265,00 || 10.337.756,0
BIDANG PEMBINAAN KEMASYARAKATAN DESA			
Sub Bidang Kebudayaan dan Keagamaan ||	11.200.000,00 ||	11.200.000,00	
Sub Bidang Kepemudaan dan Olah Raga	|| 2.573.604,00 ||	2.561.000,00 ||	12.604,00
Sub Bidang Kelembagaan Masyarakat	|| 7.699.700,00 ||	7.498.500,00 ||	201.200,00
Jumlah Bidang Pembinaan Kemasyarakatan Desa ||	21.473.304,00 ||	21.259.500,00 ||	213.804,0
BIDANG PEMBERDAYAAN MASYARAKAT DESA			
Sub Bidang Pertanian dan Peternakan ||	150.750.000,00 ||	144.456.000,00 || 6.294.000,00
Sub Bidang Pemberdayaan Perempuan, 
Perlindungan Anak dan Keluarga	  || 26.772.900,00 ||	26 063.500.00 || 709.400,00
Jumlah Bidang Pemberdayaan Masyarakat ||	177.522.900,00 ||	170.519.500,00 ||	7.003.400,0
BIDANG PENANGGULANGAN BENCANA, KEADAAN DARURAT DAN MENDESAK			
Sub Bidang Penanggulangan Bencana ||	7.748.600,06	|| -	|| 7.748.600,06
Sub Bidang Keadaan Mendesak	 || 302.400.000,00 ||	302.400.000,00 ||	-
Jumlah Bidang Penanggulangan Bencana, 
Keadaan Darurat dan Mendesak	        || 310.148.600,00 ||	302.400.000,00 ||	7.748.600,0
JUMLAH BELANJA 	|| 1.408.754.635,24	|| 1.357.648.219,00 ||	51.106.416,24
SURPLUS/DEFISIT	|| 96.259.635,24 ||	37.677.104,95 ||	58.382.530,29
      
PEMBIAYAAN			
Penerimaan Pembiayaan	 || 126.259.635,24 ||	126.259.635,24 ||	-
Pengeluaran Pembiayaan	|| 30.000.000,00 ||	30.000.000,00	 || -
Jumlah Pembiayaan	 || 96.259.635,24 ||	96.259.635,24	 || -
      
SILPA TAHUN BERJALAN	||	58.382.530,29 || 58.382.530,29 ||
    `
  );
};

export default apbdesHandler; 
