/** Format Date */
export const getFormattedDate = (date) =>
    date
        ? (() => {
              const fecha = new Date(date);

              const mes = fecha.toLocaleDateString('es-ES', { month: 'long' });
              const dia = fecha.getDate();
              const año = fecha.getFullYear();

              return `${mes.charAt(0).toUpperCase() + mes.slice(1)} ${dia}, ${año}`;
          })()
        : '';
