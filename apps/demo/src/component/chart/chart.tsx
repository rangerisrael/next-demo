import { Bar, defaults } from 'react-chartjs-2';

export default function Chart() {
  const dataHorBar = {
    labels: ['HTML', 'CSS', 'JavaScript', 'Typescript', 'React'],
    datasets: [
      {
        label: 'Percentage',
        backgroundColor: [
          'rgb(232,98,41)',
          'rgb(37,74,220)',
          'rgb(239,217,28)',
          'rgb(46,117,192)',
          'rgb(95,211,242)',
        ],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [85, 85, 80, 70, 60],
      },
    ],
  };

  let delayed = false;
  return (
    <div className="bar" id="progress">
      <Bar
        data={dataHorBar}
        width={50}
        height={15}
        options={{
          animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (
                context.type === 'data' &&
                context.mode === 'default' &&
                !delayed
              ) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
          maintainAspectRatio: true,
          showScale: false,

          indexAxis: 'y',
          // Elements options apply to all of the options unless overridden in a dataset
          // In this case, we are setting the border of each horizontal bar to be 2px wide
          elements: {
            bar: {
              borderWidth: 2,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
              display: false,
            },
            title: {
              display: true,
              text: 'Fundamentals Skillset',
            },
          },
        }}
      />
    </div>
  );
}
