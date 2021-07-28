import {Item} from '../models/item';
import {STUDENTS} from './student.json';
import {JURIES} from './jury.json';

export const ITEMS: Item[] = [
  {
    _id: '0',
    name: 'Proyecto de investigación',
    grade: 0,
    max_grade: 5,
    relative_grade: 0,
    weight: 1,
    relative_weigth: 0,
    grade_scale: null,
    createdAt: 'Hoy',
    evaluation_status: 'evaluated',
    students: [STUDENTS[0], STUDENTS[1]],
    juries: JURIES,
    director: {
      _id: '111',
      firstName: 'Jorge Enrique',
      lastName: 'Otalora',
      mail: 'jorge.enrique@uptc.edu.co',
      institutional_id: '123456789'
    },
    items: [{
      _id: '1',
      name: 'Título',
      grade: 0,
      max_grade: 5,
      relative_grade: 0,
      weight: 0,
      relative_weigth: 0.05,
      grade_scale: null,
      createdAt: '',
      evaluation_status: '',
      students: [],
      juries: [],
      director: null,
      items: [
        {
          _id: '1-1',
          name: 'Redacción',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [
            {
              _id: '1-1-1',
              name: 'Utiliza términos técnicos correctos',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0.2,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-2',
              name: 'Evita el utilizar lenguaje coloquial',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0.2,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }
          ]
        }, {
          _id: '1-2',
          name: 'Formulación',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [{
            _id: '1-2-1',
            name: 'Permite Identicar Metodos a usa',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0.2,
            grade_scale: {
              scale_name: 'A',
              option_name: 'Excelente',
              assestment: 1
            },
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: []
          },
            {
              _id: '1-2-2',
              name: 'Permite Identicar Naturaleza trabajo',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0.2,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-1',
              name: 'La extensión es menor de 20 palabras',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0.2,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }]
        }
      ]
    },
      {
        _id: '2',
        name: 'Problema de investigación',
        grade: 0,
        max_grade: 5,
        relative_grade: 0,
        weight: 0,
        relative_weigth: 0.1,
        grade_scale: null,
        createdAt: '',
        evaluation_status: '',
        students: [],
        juries: [],
        director: null,
        items: [
          {
            _id: '2-1',
            name: 'Redacción',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: null,
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: [
              {
                _id: '2-1-1',
                name: 'Preciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0.33,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-2',
                name: 'Claro',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0.33,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Regular',
                  assestment: 0.5
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-3',
                name: 'Conciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0.33,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              }
            ]
          }
        ]
      },
      {
        _id: '3',
        name: 'Formulación de objetivos',
        grade: 0,
        max_grade: 5,
        relative_grade: 0,
        weight: 0,
        relative_weigth: 0,
        grade_scale: null,
        createdAt: '',
        evaluation_status: '',
        students: [],
        juries: [],
        director: null,
        items: [
          {
            _id: '2-1',
            name: 'Redacción',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: null,
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: [
              {
                _id: '2-1-1',
                name: 'Preciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-2',
                name: 'Claro',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-3',
                name: 'Conciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              }
            ]
          }
        ]
      },
      {
        _id: '4',
        name: 'Justificación de la propuesta',
        grade: 0,
        max_grade: 5,
        relative_grade: 0,
        weight: 0,
        relative_weigth: 0,
        grade_scale: null,
        createdAt: '',
        evaluation_status: '',
        students: [],
        juries: [],
        director: null,
        items: [
          {
            _id: '2-1',
            name: 'Redacción',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: null,
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: [
              {
                _id: '2-1-1',
                name: 'Preciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-2',
                name: 'Claro',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-3',
                name: 'Conciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              }
            ]
          }
        ]
      },
      {
        _id: '5',
        name: 'Referente conceptual',
        grade: 0,
        max_grade: 5,
        relative_grade: 0,
        weight: 0,
        relative_weigth: 0,
        grade_scale: null,
        createdAt: '',
        evaluation_status: '',
        students: [],
        juries: [],
        director: null,
        items: [
          {
            _id: '2-1',
            name: 'Redacción',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: null,
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: [
              {
                _id: '2-1-1',
                name: 'Preciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-2',
                name: 'Claro',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-3',
                name: 'Conciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              }
            ]
          }
        ]
      },
      {
        _id: '6',
        name: 'Metodología',
        grade: 0,
        max_grade: 5,
        relative_grade: 0,
        weight: 0,
        relative_weigth: 0,
        grade_scale: null,
        createdAt: '',
        evaluation_status: '',
        students: [],
        juries: [],
        director: null,
        items: [
          {
            _id: '2-1',
            name: 'Redacción',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: null,
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: [
              {
                _id: '2-1-1',
                name: 'Preciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-2',
                name: 'Claro',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-3',
                name: 'Conciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              }
            ]
          }
        ]
      },
      {
        _id: '7',
        name: 'Cronograma y aspectos administrativos',
        grade: 0,
        max_grade: 5,
        relative_grade: 0,
        weight: 0,
        relative_weigth: 0,
        grade_scale: null,
        createdAt: '',
        evaluation_status: '',
        students: [],
        juries: [],
        director: null,
        items: [
          {
            _id: '2-1',
            name: 'Redacción',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: null,
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: [
              {
                _id: '2-1-1',
                name: 'Preciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-2',
                name: 'Claro',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-3',
                name: 'Conciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              }
            ]
          }
        ]
      },

    ]
  },
  {
    _id: '1',
    name: 'Título del proyecto',
    grade: 0,
    max_grade: 5,
    relative_grade: 0,
    weight: 1,
    relative_weigth: 0,
    grade_scale: null,
    createdAt: 'Hoy',
    evaluation_status: 'not-evaluated',
    students: [STUDENTS[0], STUDENTS[1]],
    juries: JURIES,
    director: {
      _id: '111',
      firstName: 'Jorge Enrique',
      lastName: 'Otalora',
      mail: 'jorge.enrique@uptc.edu.co',
      institutional_id: '123456789'
    },
    items: [{
      _id: '1',
      name: 'Título',
      grade: 0,
      max_grade: 5,
      relative_grade: 0,
      weight: 0,
      relative_weigth: 0,
      grade_scale: null,
      createdAt: '',
      evaluation_status: '',
      students: [],
      juries: [],
      director: null,
      items: [
        {
          _id: '1-1',
          name: 'Redacción',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [
            {
              _id: '1-1-1',
              name: 'Utiliza términos técnicos correctos',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-2',
              name: 'Evita el utilizar lenguaje coloquial',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }
          ]
        }, {
          _id: '1-2',
          name: 'Formulación',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [{
            _id: '1-2-1',
            name: 'Permite Identicar Metodos a usa',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: {
              scale_name: 'A',
              option_name: 'Excelente',
              assestment: 1
            },
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: []
          },
            {
              _id: '1-2-2',
              name: 'Permite Identicar Naturaleza trabajo',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-1',
              name: 'La extensión es menor de 20 palabras',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }]
        }
      ]
    },
      {
        _id: '2',
        name: 'Problema de investigación',
        grade: 0,
        max_grade: 5,
        relative_grade: 0,
        weight: 0,
        relative_weigth: 0,
        grade_scale: null,
        createdAt: '',
        evaluation_status: '',
        students: [],
        juries: [],
        director: null,
        items: [
          {
            _id: '2-1',
            name: 'Redacción',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: null,
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: [
              {
                _id: '2-1-1',
                name: 'Preciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-2',
                name: 'Claro',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-3',
                name: 'Conciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    _id: '2',
    name: 'Título del proyecto',
    grade: 0,
    max_grade: 5,
    relative_grade: 0,
    weight: 1,
    relative_weigth: 0,
    grade_scale: null,
    createdAt: 'Hoy',
    evaluation_status: 'evaluated',
    students: [STUDENTS[0], STUDENTS[1]],
    juries: JURIES,
    director: {
      _id: '111',
      firstName: 'Jorge Enrique',
      lastName: 'Otalora',
      mail: 'jorge.enrique@uptc.edu.co',
      institutional_id: '123456789'
    },
    items: [{
      _id: '1',
      name: 'Título',
      grade: 0,
      max_grade: 5,
      relative_grade: 0,
      weight: 0,
      relative_weigth: 0,
      grade_scale: null,
      createdAt: '',
      evaluation_status: '',
      students: [],
      juries: [],
      director: null,
      items: [
        {
          _id: '1-1',
          name: 'Redacción',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [
            {
              _id: '1-1-1',
              name: 'Utiliza términos técnicos correctos',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-2',
              name: 'Evita el utilizar lenguaje coloquial',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }
          ]
        }, {
          _id: '1-2',
          name: 'Formulación',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [{
            _id: '1-2-1',
            name: 'Permite Identicar Metodos a usa',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: {
              scale_name: 'A',
              option_name: 'Excelente',
              assestment: 1
            },
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: []
          },
            {
              _id: '1-2-2',
              name: 'Permite Identicar Naturaleza trabajo',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-1',
              name: 'La extensión es menor de 20 palabras',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }]
        }
      ]
    },
      {
        _id: '2',
        name: 'Problema de investigación',
        grade: 0,
        max_grade: 5,
        relative_grade: 0,
        weight: 0,
        relative_weigth: 0,
        grade_scale: null,
        createdAt: '',
        evaluation_status: '',
        students: [],
        juries: [],
        director: null,
        items: [
          {
            _id: '2-1',
            name: 'Redacción',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: null,
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: [
              {
                _id: '2-1-1',
                name: 'Preciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-2',
                name: 'Claro',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-3',
                name: 'Conciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    _id: '3',
    name: 'Título del proyecto',
    grade: 0,
    max_grade: 5,
    relative_grade: 0,
    weight: 1,
    relative_weigth: 0,
    grade_scale: null,
    createdAt: 'Hoy',
    evaluation_status: 'evaluated',
    students: [STUDENTS[0], STUDENTS[1]],
    juries: JURIES,
    director: {
      _id: '111',
      firstName: 'Jorge Enrique',
      lastName: 'Otalora',
      mail: 'jorge.enrique@uptc.edu.co',
      institutional_id: '123456789'
    },
    items: [{
      _id: '1',
      name: 'Título',
      grade: 0,
      max_grade: 5,
      relative_grade: 0,
      weight: 0,
      relative_weigth: 0,
      grade_scale: null,
      createdAt: '',
      evaluation_status: '',
      students: [],
      juries: [],
      director: null,
      items: [
        {
          _id: '1-1',
          name: 'Redacción',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [
            {
              _id: '1-1-1',
              name: 'Utiliza términos técnicos correctos',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-2',
              name: 'Evita el utilizar lenguaje coloquial',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }
          ]
        }, {
          _id: '1-2',
          name: 'Formulación',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [{
            _id: '1-2-1',
            name: 'Permite Identicar Metodos a usa',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: {
              scale_name: 'A',
              option_name: 'Excelente',
              assestment: 1
            },
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: []
          },
            {
              _id: '1-2-2',
              name: 'Permite Identicar Naturaleza trabajo',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-1',
              name: 'La extensión es menor de 20 palabras',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }]
        }
      ]
    },
      {
        _id: '2',
        name: 'Problema de investigación',
        grade: 0,
        max_grade: 5,
        relative_grade: 0,
        weight: 0,
        relative_weigth: 0,
        grade_scale: null,
        createdAt: '',
        evaluation_status: '',
        students: [],
        juries: [],
        director: null,
        items: [
          {
            _id: '2-1',
            name: 'Redacción',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: null,
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: [
              {
                _id: '2-1-1',
                name: 'Preciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-2',
                name: 'Claro',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-3',
                name: 'Conciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    _id: '4',
    name: 'Título del proyecto',
    grade: 0,
    max_grade: 5,
    relative_grade: 0,
    weight: 1,
    relative_weigth: 0,
    grade_scale: null,
    createdAt: 'Hoy',
    evaluation_status: 'evaluated',
    students: [STUDENTS[2]],
    juries: JURIES,
    director: {
      _id: '111',
      firstName: 'Jorge Enrique',
      lastName: 'Otalora',
      mail: 'jorge.enrique@uptc.edu.co',
      institutional_id: '123456789'
    },
    items: [{
      _id: '1',
      name: 'Título',
      grade: 0,
      max_grade: 5,
      relative_grade: 0,
      weight: 0,
      relative_weigth: 0,
      grade_scale: null,
      createdAt: '',
      evaluation_status: '',
      students: [],
      juries: [],
      director: null,
      items: [
        {
          _id: '1-1',
          name: 'Redacción',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [
            {
              _id: '1-1-1',
              name: 'Utiliza términos técnicos correctos',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-2',
              name: 'Evita el utilizar lenguaje coloquial',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }
          ]
        }, {
          _id: '1-2',
          name: 'Formulación',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [{
            _id: '1-2-1',
            name: 'Permite Identicar Metodos a usa',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: {
              scale_name: 'A',
              option_name: 'Excelente',
              assestment: 1
            },
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: []
          },
            {
              _id: '1-2-2',
              name: 'Permite Identicar Naturaleza trabajo',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-1',
              name: 'La extensión es menor de 20 palabras',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }]
        }
      ]
    },
      {
        _id: '2',
        name: 'Problema de investigación',
        grade: 0,
        max_grade: 5,
        relative_grade: 0,
        weight: 0,
        relative_weigth: 0,
        grade_scale: null,
        createdAt: '',
        evaluation_status: '',
        students: [],
        juries: [],
        director: null,
        items: [
          {
            _id: '2-1',
            name: 'Redacción',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: null,
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: [
              {
                _id: '2-1-1',
                name: 'Preciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-2',
                name: 'Claro',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-3',
                name: 'Conciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    _id: '5',
    name: 'Título del proyecto',
    grade: 0,
    max_grade: 5,
    relative_grade: 0,
    weight: 1,
    relative_weigth: 0,
    grade_scale: null,
    createdAt: 'Hoy',
    evaluation_status: 'evaluated',
    students: [STUDENTS[2]],
    juries: JURIES,
    director: {
      _id: '111',
      firstName: 'Jorge Enrique',
      lastName: 'Otalora',
      mail: 'jorge.enrique@uptc.edu.co',
      institutional_id: '123456789'
    },
    items: [{
      _id: '1',
      name: 'Título',
      grade: 0,
      max_grade: 5,
      relative_grade: 0,
      weight: 0,
      relative_weigth: 0,
      grade_scale: null,
      createdAt: '',
      evaluation_status: '',
      students: [],
      juries: [],
      director: null,
      items: [
        {
          _id: '1-1',
          name: 'Redacción',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [
            {
              _id: '1-1-1',
              name: 'Utiliza términos técnicos correctos',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-2',
              name: 'Evita el utilizar lenguaje coloquial',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }
          ]
        }, {
          _id: '1-2',
          name: 'Formulación',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [{
            _id: '1-2-1',
            name: 'Permite Identicar Metodos a usa',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: {
              scale_name: 'A',
              option_name: 'Excelente',
              assestment: 1
            },
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: []
          },
            {
              _id: '1-2-2',
              name: 'Permite Identicar Naturaleza trabajo',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-1',
              name: 'La extensión es menor de 20 palabras',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }]
        }
      ]
    },
      {
        _id: '2',
        name: 'Problema de investigación',
        grade: 0,
        max_grade: 5,
        relative_grade: 0,
        weight: 0,
        relative_weigth: 0,
        grade_scale: null,
        createdAt: '',
        evaluation_status: '',
        students: [],
        juries: [],
        director: null,
        items: [
          {
            _id: '2-1',
            name: 'Redacción',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: null,
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: [
              {
                _id: '2-1-1',
                name: 'Preciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-2',
                name: 'Claro',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-3',
                name: 'Conciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    _id: '6',
    name: 'Título del proyecto',
    grade: 0,
    max_grade: 5,
    relative_grade: 0,
    weight: 1,
    relative_weigth: 0,
    grade_scale: null,
    createdAt: 'Hoy',
    evaluation_status: 'evaluated',
    students: [STUDENTS[2]],
    juries: JURIES,
    director: {
      _id: '111',
      firstName: 'Jorge Enrique',
      lastName: 'Otalora',
      mail: 'jorge.enrique@uptc.edu.co',
      institutional_id: '123456789'
    },
    items: [{
      _id: '1',
      name: 'Título',
      grade: 0,
      max_grade: 5,
      relative_grade: 0,
      weight: 0,
      relative_weigth: 0,
      grade_scale: null,
      createdAt: '',
      evaluation_status: '',
      students: [],
      juries: [],
      director: null,
      items: [
        {
          _id: '1-1',
          name: 'Redacción',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [
            {
              _id: '1-1-1',
              name: 'Utiliza términos técnicos correctos',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-2',
              name: 'Evita el utilizar lenguaje coloquial',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }
          ]
        }, {
          _id: '1-2',
          name: 'Formulación',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [{
            _id: '1-2-1',
            name: 'Permite Identicar Metodos a usa',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: {
              scale_name: 'A',
              option_name: 'Excelente',
              assestment: 1
            },
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: []
          },
            {
              _id: '1-2-2',
              name: 'Permite Identicar Naturaleza trabajo',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-1',
              name: 'La extensión es menor de 20 palabras',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }]
        }
      ]
    },
      {
        _id: '2',
        name: 'Problema de investigación',
        grade: 0,
        max_grade: 5,
        relative_grade: 0,
        weight: 0,
        relative_weigth: 0,
        grade_scale: null,
        createdAt: '',
        evaluation_status: '',
        students: [],
        juries: [],
        director: null,
        items: [
          {
            _id: '2-1',
            name: 'Redacción',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: null,
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: [
              {
                _id: '2-1-1',
                name: 'Preciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-2',
                name: 'Claro',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-3',
                name: 'Conciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    _id: '7',
    name: 'Título del proyecto',
    grade: 0,
    max_grade: 5,
    relative_grade: 0,
    weight: 1,
    relative_weigth: 0,
    grade_scale: null,
    createdAt: 'Hoy',
    evaluation_status: 'evaluated',
    students: [STUDENTS[2]],
    juries: JURIES,
    director: {
      _id: '111',
      firstName: 'Jorge Enrique',
      lastName: 'Otalora',
      mail: 'jorge.enrique@uptc.edu.co',
      institutional_id: '123456789'
    },
    items: [{
      _id: '1',
      name: 'Título',
      grade: 0,
      max_grade: 5,
      relative_grade: 0,
      weight: 0,
      relative_weigth: 0,
      grade_scale: null,
      createdAt: '',
      evaluation_status: '',
      students: [],
      juries: [],
      director: null,
      items: [
        {
          _id: '1-1',
          name: 'Redacción',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [
            {
              _id: '1-1-1',
              name: 'Utiliza términos técnicos correctos',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-2',
              name: 'Evita el utilizar lenguaje coloquial',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }
          ]
        }, {
          _id: '1-2',
          name: 'Formulación',
          grade: 0,
          max_grade: 5,
          relative_grade: 0,
          weight: 0,
          relative_weigth: 0,
          grade_scale: null,
          createdAt: '',
          evaluation_status: '',
          students: [],
          juries: [],
          director: null,
          items: [{
            _id: '1-2-1',
            name: 'Permite Identicar Metodos a usa',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: {
              scale_name: 'A',
              option_name: 'Excelente',
              assestment: 1
            },
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: []
          },
            {
              _id: '1-2-2',
              name: 'Permite Identicar Naturaleza trabajo',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            },
            {
              _id: '1-1-1',
              name: 'La extensión es menor de 20 palabras',
              grade: 0,
              max_grade: 5,
              relative_grade: 0,
              weight: 0,
              relative_weigth: 0,
              grade_scale: {
                scale_name: 'A',
                option_name: 'Excelente',
                assestment: 1
              },
              createdAt: '',
              evaluation_status: '',
              students: [],
              juries: [],
              director: null,
              items: []
            }]
        }
      ]
    },
      {
        _id: '2',
        name: 'Problema de investigación',
        grade: 0,
        max_grade: 5,
        relative_grade: 0,
        weight: 0,
        relative_weigth: 0,
        grade_scale: null,
        createdAt: '',
        evaluation_status: '',
        students: [],
        juries: [],
        director: null,
        items: [
          {
            _id: '2-1',
            name: 'Redacción',
            grade: 0,
            max_grade: 5,
            relative_grade: 0,
            weight: 0,
            relative_weigth: 0,
            grade_scale: null,
            createdAt: '',
            evaluation_status: '',
            students: [],
            juries: [],
            director: null,
            items: [
              {
                _id: '2-1-1',
                name: 'Preciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-2',
                name: 'Claro',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              },
              {
                _id: '2-1-3',
                name: 'Conciso',
                grade: 0,
                max_grade: 5,
                relative_grade: 0,
                weight: 0,
                relative_weigth: 0,
                grade_scale: {
                  scale_name: 'A',
                  option_name: 'Excelente',
                  assestment: 1
                },
                createdAt: '',
                evaluation_status: '',
                students: [],
                juries: [],
                director: null,
                items: []
              }
            ]
          }
        ]
      }
    ]
  }
];
