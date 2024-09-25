// src/componentes/graficotarefa.js
import '../App.css'; 
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';



ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Graficotarefa = ({ tarefas = [] }) => {
  if (!Array.isArray(tarefas)) {
    console.error('Propriedade tarefas deve ser um array');
    return null;
  }

  const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;
  const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida).length;

  const data = {
    labels: ['Concluídas', 'Pendentes'],
    datasets: [
      {
        data: [tarefasConcluidas, tarefasPendentes],
        backgroundColor: ['#a2ff33 ', '#7509db'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="grafico-container">
      <h2>Dados das Tarefas</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default Graficotarefa;
