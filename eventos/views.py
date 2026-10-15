from django.shortcuts import render, get_object_or_404
from .models import Evento, Local, Inscricao, Categoria, Atividade, Relatorio
from django.utils import timezone

def index(request):
    categorias = Categoria.objects.all()
    categoria_id = request.GET.get('x')     

    if categoria_id:
        categoria_selecionada = get_object_or_404(Categoria, id=categoria_id)
        eventos = categoria_selecionada.eventos.order_by('data_inicio')
    else:
        categoria_selecionada = None
        eventos = Evento.objects.order_by('data_inicio')

    return render(request, 'eventos/index.html', {
        'eventos': eventos,
        'categorias': categorias,
        'categoria_selecionada': categoria_selecionada,
    })

def detalhe(request, pk):
    evento = get_object_or_404(Evento, pk = pk)
    return render(request, 'eventos/detalhe.html', {'evento': evento})

def local(request, pk):
    local = get_object_or_404(Local, pk = pk)
    eventos_do_local = local.eventos.all()
    return render(request, 'eventos/local.html', {'local': local, 'eventos': eventos_do_local})